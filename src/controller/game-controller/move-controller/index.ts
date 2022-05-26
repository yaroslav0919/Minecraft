import * as THREE from 'three';
import Core from '../../../core';
import { config, symConfig } from '../../config/index';
import { collisionCheck } from '../../../utils/collision';

class MoveController {
	core: Core;

	constructor(core: Core) {
		this.core = core;
	}

	positionMove({ font, left, up }) {
		// TODO 作弊模式没有碰撞检测
		console.log(this.core.camera.rotation);
		console.log('relative', font, left, up);

		// 先不处理跳跃事件
		const speed = Math.sqrt(font ** 2 + left ** 2);
		const absoluteMove = new THREE.Vector3(-left, 0, font);
		const revMat = new THREE.Matrix3();
		revMat.setFromMatrix4(this.core.camera.matrixWorldInverse);
		absoluteMove.applyMatrix3(revMat);
		absoluteMove.y = 0;
		absoluteMove.normalize(); // 获得方向向量
		absoluteMove.multiplyScalar(speed); // * symConfig.actionsScale.walking * symConfig.actionsScale.moveScale);
		console.log('absolute', absoluteMove.x, absoluteMove.y, absoluteMove.z);

		// 处理跳跃事件
		absoluteMove.y = up * symConfig.actionsScale.jump * symConfig.actionsScale.moveScale;

		const nextPosition = {
			posX: config.state.posX + absoluteMove.x,
			posY: config.state.posY + absoluteMove.y,
			posZ: config.state.posZ + absoluteMove.z,
		};

		this.core.camera.position.set(nextPosition.posX, nextPosition.posY, nextPosition.posZ);

		config.state = { ...config.state, ...nextPosition };
	}

	viewDirectionMove({ viewHorizontal, viewVertical }) {
		this.core.camera.rotation.y += -viewHorizontal * symConfig.actionsScale.viewScale;
		while (this.core.camera.rotation.y > Math.PI) this.core.camera.rotation.y -= Math.PI * 2;
		while (this.core.camera.rotation.y < -Math.PI) this.core.camera.rotation.y += Math.PI * 2;
		this.core.camera.rotation.x += viewVertical * symConfig.actionsScale.viewScale;
		this.core.camera.rotation.x = Math.max(Math.min(this.core.camera.rotation.x, Math.PI * 0.5), -Math.PI * 0.5);
		this.core.camera.updateMatrix();
	}
}

export default MoveController;
