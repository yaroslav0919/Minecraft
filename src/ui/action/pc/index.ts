import { Controller } from '../../../controller';
import { config } from '../../../controller/config';
import { actionBlockEvent } from '../../../controller/game-controller';

class ActionPluginPc {
	elem: HTMLElement;

	controller: Controller;

	keyListener: (e: KeyboardEvent) => void;

	keyUpListener: (e: KeyboardEvent) => void;

	clickListener: (e: MouseEvent) => void;

	pointerLockListener: (e: Event) => void;

	mouseMoveListener: (e: MouseEvent) => void;

	constructor(el: HTMLElement, controller: Controller) {
		this.elem = el;
		this.controller = controller;
		this.keyListener = ActionPluginPc.getKeyListener(this);
		this.clickListener = ActionPluginPc.getClickListener(this);
		this.pointerLockListener = ActionPluginPc.getPointerLockListener();
		this.mouseMoveListener = ActionPluginPc.getMouseMoveListener(this);
		this.keyUpListener = ActionPluginPc.getKeyUpListener(this);
	}

	load() {
		this;
	}

	listen() {
		// eslint-disable-next-line
		(this.elem.requestPointerLock() as unknown as Promise<null>).catch(() => {
			this.controller.ui.menu.setNotify('鼠标锁定失败, 请尝试再次点击', 1000, this.elem);
		});
		document.addEventListener('keydown', this.keyListener);
		document.addEventListener('keyup', this.keyUpListener);
		this.elem.addEventListener('contextmenu', this.clickListener);
		this.elem.addEventListener('click', this.clickListener);
		this.elem.addEventListener('mousemove', this.mouseMoveListener);
	}

	pause() {
		document.exitPointerLock();
		document.removeEventListener('keydown', this.keyListener);
		document.removeEventListener('keyup', this.keyUpListener);
		this.elem.removeEventListener('contextmenu', this.clickListener);
		this.elem.addEventListener('mousemove', this.mouseMoveListener);
		this.elem.removeEventListener('click', this.clickListener);
	}

	static getKeyListener(self) {
		return e => {
			if (e.key === 'Escape') {
				self.controller.pauseGame();
				self.controller.uiController.ui.menu.toInnerGameMenu();
				return;
			}
			if (self.controller.uiController.ui.bag.bagBox.working) return;
			if (['w', 'W'].includes(e.key)) self.controller.gameController.handleMoveAction({ font: 1 });
			else if (['a', 'A'].includes(e.key)) self.controller.gameController.handleMoveAction({ left: 1 });
			else if (['s', 'S'].includes(e.key)) self.controller.gameController.handleMoveAction({ font: -1 });
			else if (['d', 'D'].includes(e.key)) self.controller.gameController.handleMoveAction({ left: -1 });
			else if (e.key === ' ') self.controller.gameController.handleMoveAction({ up: 1 });
			else if (e.key === 'Shift' && config.controller.cheat) self.controller.gameController.handleMoveAction({ up: -1 });
		};
	}

	static getKeyUpListener(self) {
		return e => {
			if (self.controller.uiController.ui.bag.bagBox.working) return;
			if (['w', 'W', 's', 'S'].includes(e.key)) self.controller.gameController.handleMoveAction({ font: 0 });
			else if (['a', 'A', 'd', 'D'].includes(e.key)) self.controller.gameController.handleMoveAction({ left: 0 });
			else if (e.key === ' ') self.controller.gameController.handleMoveAction({ up: 0 });
			else if (e.key === 'Shift' && config.controller.cheat) self.controller.gameController.handleMoveAction({ up: 0 });
			else if (['q', 'Q'].includes(e.key)) self.controller.toggleCheatMode();
		};
	}

	static getClickListener(self) {
		return e => {
			e.preventDefault();
			e.stopPropagation();
			if (!document.pointerLockElement) {
				(self.elem.requestPointerLock() as unknown as Promise<null>).catch(() => {
					self.controller.ui.menu.setNotify('鼠标锁定失败, 请尝试再次点击', 1000, self.elem);
				});
				return false;
			}
			if (e.button === 0) self.controller.gameController.handleBlockAction(actionBlockEvent.ADD);
			if (e.button === 2) self.controller.gameController.handleBlockAction(actionBlockEvent.REMOVE);
			return false;
		};
	}

	static getPointerLockListener() {
		return () => {
			if (document.pointerLockElement) {
				document.exitPointerLock();
			} else {
				document.body.requestPointerLock();
			}
		};
	}

	static getMouseMoveListener(self) {
		return e => {
			if (!document.pointerLockElement) return false;
			self.controller.gameController.handleViewAction({ horizontal: e.movementX, vertical: -e.movementY });
			return false;
		};
	}
}

export default ActionPluginPc;
