# 上传文件

## 创建弹框读取文件
如果采用a标签点击，弹出选取文件弹框
```js
domA.addEventListener('click', (event) => {
  const fileSelector = document.createElement('input');
  fileSelector.setAttribute('type', 'file');
  fileSelector.setAttribute('multiple', 'multiple'); // 如果一次选取多个文件就需要这个参数
  fileSelector.onchange = (e) => {
    // 文件数据存储在 fileSelector.files 中
  };
  fileSelector.click();
});
```

或者直接监听input的change
```html
<input multiple class="upload_model"  type="file">
<script type="text/javascript">
  const ele = dom.querySelector('.upload_model');
  ele.addEventListener('change', (e) => {
    // 文件数据存储在 fileSelector.files 中
  });
</script>
```

## 文件客户端读取
file传入的是fileSelector.files数组中的一个对象
如`file = fileSelector.files[0]`
file是一个可读对象，不可以修改

二进制读取文件
```js
const reader = new FileReader();
reader.onload = (e) => {
  console.log(e.target.result);
};
reader.readAsArrayBuffer(file);
```

读取图片
```js
const reader = new FileReader();
reader.onload = (e) => {
  domImg.querySelector('img').src = e.target.result;
  // fileData[id].data = e.target.result;
};
reader.readAsDataURL(file);
```

## 上传到服务器
如果要将文件上传到服务器，需要借助表单对象
```js
const formData = new FormData();
fileSelector.files.forEach((file) => {
  formData.append('model', file);
});
```
post请求传递formData即可

formData包含append，set方式，都是传递一个key一个value。
但是set方式具有唯一性。

