//导入工具包require('nide_modules里对应模块')
var gulp = require("gulp");//本地安装gulp所用到的地方 gulp命令
var	sass = require("gulp-sass"); //sass命令
//var connect = require("gulp-connect");//服务命令 自动刷新
var concat = require("gulp-concat");//合并
var uglify = require("gulp-uglify");//合并并压缩
var rename = require("gulp-rename");//重命名
var minfyCSS = require("gulp-minify-css");//压缩css文件
var imagemin = require("gulp-imagemin");//压缩图片

//拷贝html
gulp.task("copy-html",function(){
	gulp.src("./src/html/*.html")
	//.pipe(uglify())//压缩文件
	.pipe(gulp.dest("./dist/html"));//gulp.dest()里可以写绝对路径
});//路径里要是有的话就放在里面，没有的话会创建

//拷贝php
gulp.task("copy-php",function(){
	gulp.src("./src/php/*.php")
	.pipe(gulp.dest("./dist/php"));//gulp.dest()里可以写绝对路径
});//路径里要是有的话就放在里面，没有的话会创建

//拷贝sass
gulp.task("sass",function(){
	gulp.src("./src/sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./src/css"));
});
//拷贝并压缩css
gulp.task("copy-css",function(){
	gulp.src("./src/css/*.css")
	.pipe(minfyCSS())
	//.pipe(rename("index.min.css")) //改名
	.pipe(gulp.dest("./dist/css"));
});
//gulp.task("sass",function(){
	//gulp.src("*.scss").pipe(sass())
	//.pipe(minfyCSS())
	//.pipe(rename("index.min.css"))
	//.pipe(gulp.dest("D:\\phpStudy\\WWW\\project\\css"));
//});


//拷贝并压缩js
gulp.task("copy-js",function(){
	gulp.src("./src/js/*.js")
	//.pipe(concat("index.js"))//合并所有js文件
	//.pipe(uglify())//压缩文件
	//.pipe(rename("index.min.js"))//重命名
	.pipe(gulp.dest("./dist/js"));
});

//拷贝图片
gulp.task("copy-image",function(){
	gulp.src("./src/img/*.{jpg,png,gif}")
	//.pipe(imagemin())//压缩图片
	.pipe(gulp.dest("./dist/img"));
});


//监听所有
gulp.task("watch",function(){
	gulp.watch("./src/html/*.html",["copy-html"]);//index.html是修改的html copy-index是起的名字
	gulp.watch("./src/sass/*.scss",["sass"]);
	gulp.watch("./src/css/*.css",["copy-css"]);
	gulp.watch("./src/js/*js",["copy-js"]);
	gulp.watch("./src/img/*.{jpg,png,gif}",["copy-image"]);
	gulp.watch("./src/php/*.php",["copy-php"]);
});


