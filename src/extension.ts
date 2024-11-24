import * as vscode from 'vscode';

// 当您的扩展被激活时，会调用此方法
// 您的扩展在命令第一次执行时被激活
export function activate(context: vscode.ExtensionContext) {

	// 当您的扩展被激活时，此行代码只会执行一次
	console.log('恭喜，您的扩展 "vscode-plugin-zheng" 现在已激活！');

	context.subscriptions.push(
		// 命令已在 package.json 文件中定义
		// 现在提供命令的实现，并使用 registerCommand 注册
		// commandId 参数必须与 package.json 中的 command 字段匹配
		vscode.commands.registerCommand('vscode-plugin-zheng.helloWorld', () => {
			// 您在这里放置的代码将在每次执行命令时执行
			// 向用户显示一个消息框
			vscode.window.showInformationMessage('Hello World from vscode-plugin-zheng!');
		})
	);

	context.subscriptions.push(
		// 注册一个显示“贷款计算器”的webview面板
		vscode.commands.registerCommand('vscode-plugin-zheng.calc', () => {
			const panel = vscode.window.createWebviewPanel(
				"win", // 面板的标识符
				"贷款计算器", // 面板的标题
				vscode.ViewColumn.One, // 面板所在的位置
				{
					enableScripts: true, // 启用webview中的脚本
					retainContextWhenHidden: true, // 隐藏webview时保留其上下文
					localResourceRoots: [vscode.Uri.file(context.extensionPath)], // 允许加载本地资源为此扩展目录下的资源
				}
			);
			const webview = panel.webview;
			webview.html = `
        <!DOCTYPE html>
				<html lang="en">
					<head>
						<meta charset="UTF-8" />
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<title>贷款计算器</title>
					</head>
					<body style="overflow-y: hidden;">
						贷款计算器
					</body>
				</html>
				`;
		})
	);
}

// 当您的扩展被停用时，会调用此方法
export function deactivate() { }