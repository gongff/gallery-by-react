require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');
//获取图片相关数据
let imageDatas = require('../data/imageDatas.json');

//利用自执行函数，将图片名信息转化图片URL路径信息
function genImageURL(imageDataArr){
  for(var i = 0; i<imageDataArr.length; i++){
	var singleImageData = imageDataArr[i];
	singleImageData.imageURL = require('../images'+singleImageData.fileName);
	imageDataArr[i] = singleImageData;
  }
  return imageDataArr;
}
genImageURL(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec"></section>
      	<nav className="contronller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
