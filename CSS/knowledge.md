##### Các cách để csss

Cách 1: dùng trực tiếp vào thuôc tính style
style="color: red;text-decoration: underline;
Cách 2: Đưa css vào thẻ style

<style>
        h1{
            color: blue;
            text-decoration: line-through;
        }
</style>

Cách 3: liên kết qua 1 file khác trong project

Độ ưu tiên: !importan -> style inline -> css trong thẻ style -> file external

##### Thuộc tính background

```css
body  {
      background-color: red;
      background-image: url("img_tree.png");
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: right top;
}
background: red url("img_tree.png")  no-repeat fixed right top;

/*** Muốn background được phủ hết hình nên image **/
background-image: url("./images/bg.jpg");
background-size: cover;
min-height: 100vh;
```

##### Border css

```css
/* 
    border-width: 4px;
    border-bottom-width: 4px;
    border-width: 0px 0px 4px 0px;

    border-width: 4px;
    border-color: brown;
    border-style: dashed; 

    border: 1px solid brown;
*/
```
