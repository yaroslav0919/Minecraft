import '../../../utils/types/image.d.ts';
import xboxImg from '../../../assets/pictures/joy-stick/xbox-cn.png';
import psImg from '../../../assets/pictures/joy-stick/ps-cn.png';

const language = {
	singlePlayerGame: '单人游戏',
	multiPlayerGame: '多人游戏',
	uploadArchive: '上载存档',
	browserArchive: '缓存读档',
	cancelArchive: '已加载, 点击取消',
	loadArchiveSuccess: '读档成功',
	browserNoArchive: '浏览器无存档',
	cancelSuccess: '取消成功',
	setting: '游戏设置',
	help: '帮助',
	about: '关于',
	createRoom: '创建房间',
	joinRoom: '加入房间',
	exitRoom: '退出房间',
	roomName: '房间名',
	nickname: '昵称',
	player: '玩家',
	startGame: '开始游戏',
	backMenu: '返回',
	fov: '视角',
	fogFactor: '雾气因子',
	stageSize: '场景大小',
	rendDistance: '渲染距离',
	volume: '音量',
	language: '语言',
	operation: '操纵模式',
	bagMode: '背包模式',
	pcMode: 'PC端',
	mobileMode: '移动端',
	vrMode: 'VR端',
	backGame: '返回游戏',
	setFullScreen: '全屏/取消全屏',
	saveGame: '存档',
	exitGame: '退出',
	saveSuccess: '保存成功',
	cheatMode: '作弊模式',
	on: '开',
	off: '关',
	fps: 'FPS',
	helps: [
		{ k: '空格键', v: '跳跃' },
		{ k: 'E键', v: '开关背包' },
		{ k: 'Q键', v: '切换作弊模式' },
		{ k: '鼠标移动', v: '变换朝向' },
		{ k: 'WSAD键', v: '前后左右移动' },
		{ k: '数字键', v: '切换手持方块' },
		{ k: '滚轮滚动', v: '切换手持方块' },
		{ k: '点击物品框', v: '切换手持方块' },
		{ k: 'Shift键', v: '作弊模式时下降' },
		{ k: '鼠标左/右击', v: '摧毁/创建方块' },
		{ k: 'ESC键', v: '取消鼠标锁定/显示菜单' },
		{ k: '拖动屏幕', v: '变换朝向' },
		{ k: '点击物品框', v: '切换手持方块' },
		{ k: '点击激活的物品框', v: '打开背包' },
		{ k: '转动头显', v: '变换朝向' },
		{ k: '使用遥控器', v: '摧毁方块' },
	],
	aboutItems: ['基于Three.js的Minecraft实现.', '版本: 1.0.0', '去', '了解更多:)'],
	tryRotate: '请先将您的设备设为横屏再开始游戏',
	tryLock: '鼠标锁定失败, 请尝试再次点击',
	allBlock: '全部方块',
	up: '△',
	down: '▽',
	build: '⊙',
	remove: '×',
	menu: '菜单',
	opSens: '操纵灵敏',
	opRange: '操纵范围',
	crossHair: '十字准星',
	dark: '暗',
	light: '亮',
	high: '高&nbsp;&nbsp;',
	low: '低&nbsp;&nbsp',
	norm: '一般&nbsp;&nbsp',
	threadNumber: '线程数',
	weatherName: ['经典', '冰雪', '月下沙滩瓜田', '南瓜田🎃', '奇异'],
	weather: '场景',
	chromeSupport: '推荐使用新版Chrome浏览器 →',
	chromeAddress: 'https://www.google.cn/chrome/',
	enterVR: '进入VR模式',
	exitVR: '退出VR模式',
	xbox: 'Xbox',
	xboxJoystick: 'Xbox 手柄',
	xboxImg,
	joystick: '手柄',
	ps45: 'PS4/5',
	psJoystick: 'PS 手柄',
	psImg,
	developing: '该功能还在开发中, 敬请期待 :)',
	linkServer: '连接到服务器',
	defaultServer: '使用默认服务器',
	customServer: '使用自建服务器',
	serverAddress: '地址',
	cancelLink: '断开连接',
	chooseRoom: '下一步',
	dissolveRoom: '解散房间',
	wsMessage: {
		PERMISSION_DENIED: '权限不足',
		ROOM_NOT_FOUND: '未找到房间',
		CREATE_ROOM_SUCCESS: '房间创建成功',
		LEAVE_SUCCESS: '您已离开房间',
		ROOM_DISSOLVED: '房间已解散',
		PLAYER_CHANGE_JOIN: '加入了房间',
		PLAYER_CHANGE_LEAVE: '离开了房间',
		DISCONNECT: '服务器连接已断开',
		DUPlATE_NAME: '昵称重复, 请修改昵称',
	},
};

export default language;
