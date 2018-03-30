
window.onload = function () {
	let oBox   	   = document.getElementById('box');
	let aPanel 	   = Array.from(oBox.children);
	const iPanelW  = aPanel[0].offsetWidth; // 记录列的宽度


	// 计算最多容纳列数
    let iWinW   = document.documentElement.clientWidth;
    console.log(iWinW);
	let iMaxCol = Math.floor(iWinW / iPanelW);

	// 指定box的宽度
	oBox.style.width = iMaxCol * iPanelW + 'px';


	// 记录每一列的高度
	let aColH = [];

	// 遍历指定位置
	aPanel.forEach((v, k) => {
		// 如果当前panel为第一排，则top为0
		if(k < iMaxCol) {
			v.style.top = 0;
			v.style.left = k * iPanelW + 'px';

			// 记录每一列的高度
			aColH.push(v.offsetHeight);
		} else {
			// 寻找最矮列的高度值和下标
			var iMinH = Math.min(...aColH);
			var iMinK = aColH.indexOf(iMinH);


			// 指定位置
			v.style.left = iMinK * iPanelW + 'px';
			v.style.top  = iMinH + 'px';

			// 更新列的高度
			aColH[iMinK] += v.offsetHeight;
		}
	});
};