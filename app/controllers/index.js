function switchPage() {
	if ($.webview.url.indexOf('blog') >= 0) {
		$.title.setText('Deviget Website');
		$.webview.setUrl('http://www.deviget.com');
	} else {
		$.title.setText('Deviget Blog');
		$.webview.setUrl('http://blog.deviget.com');
	}
}


$.index.open();

alert('This it not a hello world');