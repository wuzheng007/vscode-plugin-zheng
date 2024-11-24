import * as vscode from 'vscode';

// 当您的扩展被激活时，会调用此方法
// 您的扩展在命令第一次执行时被激活
export function activate(context: vscode.ExtensionContext) {

	// 使用控制台输出诊断信息（console.log）和错误（console.error）
	// 当您的扩展被激活时，此行代码只会执行一次
	console.log('恭喜，您的扩展 "vscode-plugin-zheng" 现在已激活！');

	// 命令已在 package.json 文件中定义
	// 现在提供命令的实现，并使用 registerCommand 注册
	// commandId 参数必须与 package.json 中的 command 字段匹配
	let disposable = vscode.commands.registerCommand('vscode-plugin-zheng.helloWorld', () => {
		// 您在这里放置的代码将在每次执行命令时执行
		// 向用户显示一个消息框
		vscode.window.showInformationMessage('Hello World from vscode-plugin-zheng!');
	});

	context.subscriptions.push(disposable);
}

// 当您的扩展被停用时，会调用此方法
export function deactivate() {}