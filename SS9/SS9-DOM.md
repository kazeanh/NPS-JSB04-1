- JS la một ngôn ngữ được sử dụng trong trình duyệt (Browser) nên nó đóng vai trò khá là quan trọng trong ứng dụng website. => Nhiệm vụ JS là thao tác với các tài liệu HTML kết hợp cú pháp riêng của nó để tạo nên 1 trang web đầy tính năng. Để thao tác với các thẻ HTML thông qua 1 cơ chế là DOM.

- DOM là gì???
    + Thêm một khái niệm nữa, chúng ta thường nghe đến DOM và làm việc với chúng, vậy chúng được hiểu như thế nào?

    + Chúng ta có thể thấy tất cả các thẻ HTML sẽ được quản lý trong đối tượng document (DOM), thẻ cao nhất là thẻ html, tiếp đến là phân nhánh body và head. Bên trong head thì có những thẻ như style, title,... và bên trong body chứa bất kì một thẻ nào đó là thành phần của HTML. Như vậy ta có thể hiểu trong Javascript để thao tác được với các thẻ HTML ta phải thông qua đối tượng documnent (DOM).

    + Với DOM, JavaScript được tất cả sức mạnh cần thiết để tạo ra HTML động:
        * JavaScript có thể thay đổi tất cả các phần tử HTML trong trang
        * JavaScript có thể thay đổi tất cả các thuộc tính HTML trong trang
        * JavaScript có thể thay đổi tất cả các phong cách CSS trong trang
        * JavaScript có thể loại bỏ các yếu tố HTML và thuộc tính hiện tại
        * JavaScript có thể thêm các yếu tố HTML mới và các thuộc tính
        * JavaScript có thể phản ứng với tất cả các sự kiện HTML hiện trong trang
        * JavaScript có thể tạo ra các sự kiện HTML mới trong trang


    + Document Object Model - DOM ("Mô hình Đối tượng Tài liệu"), là một giao diện lập trình ứng dụng (API). DOM được dùng để truy xuất các tài liệu dạng HTML và XML, có dạng một cây cấu trúc dữ liệu, và thông thường mô hình DOM độc lập với hệ điều hành và dựa theo kỹ thuật lập trình hướng đối tượng để mô tả tài liệu.


- HTML DOM là gì?
    + HTML DOM là một chuẩn mô hình object và programming interface cho HTML. nó định nghĩa:
        * HTML elements như là objects
        * properties của tất cả HTML elements
        * methods để truy cập đến tất cả HTML elements
        * events cho tất cả HTML elements

    + HTML DOM là một tiêu chuẩn cho phép bạn thực hiện những công việc thao tác với bất kì một trang web: get, change, add, or delete các thành phần của HTML.

- DOM Attributes??
    + Attributes property là một khái niệm của DOM trả về một tập hợp các thuộc tính của nút được chỉ định, như một đối tượng NamedNodeMap. Các nút có thể được truy cập bởi các con số chỉ số, và chỉ số bắt đầu từ 0. Và bằng số chỉ mục là hữu ích cho đi qua tất cả các thành phần của Attributes: Bạn có thể sử dụng các property của đối tượng NamedNodeMap để xác định số lượng các thuộc tính, lặp qua tất cả sau đó bạn có thể tính các nút và trích xuất các thông tin mà bạn muốn.


    Xét ví dụ dưới đây và chạy thử code: 
    <!DOCTYPE html>
    <html>

    <body>

        <p>Click the button to display the name of the button's second attribute (index 1).</p>

        <button id="myBtn" onclick="myFunction()">Try it</button>

        <p id="demo"></p>

        <script>
            function myFunction() {
                var x = document.getElementById("myBtn").attributes[1].name;
                document.getElementById("demo").innerHTML = x;
            }
        </script>

    </body>

    </html>

    => Ta kết luận: Nói tóm lại, attribute là thuộc tính của các phần tử DOM. Attribute cho biết các đặc điểm của phần tử DOM đó.

- Property
    + Property cung cấp thêm thông tin về các thành phần trong HTML, các phần tử DOM được ánh xạ thành các đối tượng Javascript khi ta sử dụng Javascript để thao tác với DOM. 
    
    VD: 
    var paragraphs = document.getElementsByTagName('P'); // (1)
    var firstParagraph = paragraphs[0]; // (2)

    + Mô tả VD trên: Phần tử <P> đầu tiên của document được ánh xạ thành đối tượng Javascript được trỏ bởi biến firstParagraph, (getElementsByTagName() trả về một cấu trúc dữ liệu tương tự 1 mảng các Node được gọi là NodeList, tức là có thuộc tính length, và truy xuất thông qua chỉ số). Phần tử DOM được ánh xạ thành đối tượng có thuộc tính và phương thức trong Javascript. Thuộc tính của đối tượng Javascript, được gọi là property.
    
    ==> Chung quy lại: Attribute là thuộc tính các phần tử DOM còn Property là thuộc tính của đối tượng Javascript.

- Cây cấu trúc trong DOM (các em nên google search  để hiểu thêm về nó nha)


- Truy Xuất DOM (Nên chú ý phần này)
    + Truy xuất gián tiếp: Mỗi nút trên cây DOM đều có 6 thuộc tính quan hệ để giúp bạn truy xuất gián tiếp theo vị trí của nút:

        * Node.parentNode: tham chiếu đến nút cha của nút hiện tại, và nút cha này là duy nhất cho mỗi nút. Do đó, nếu bạn cần tìm nguồn gốc sâu xa của 1 nút, bạn phải nối thuộc tình nhiều lần, ví dụ Node.parentNode.parentNode.

        * Node.childNodes: tham chiếu đến các nút con trực tiếp của nút hiện tại, và kết quả là 1 mảng các đối tượng. Lưu ý rằng, các nút con không bị phân biệt bởi loại nút, nên kết quả mảng trả về có thể bao gồm nhiều loại nút khác nhau.

        * Node.firstChild: tham chiếu đến nút con đầu tiên của nút hiện tại, và tương đương với việc gọi Node.childNodes[0].

        * Node.lastChild: tham chiếu đến nút con cuối cùng của nút hiện tại, và tương đương với việc gọi Node.childNodes[Element.childNodes.length-1].

        * Node.nextSibling: tham chiếu đến nút anh em nằm liền kề sau với nút hiện tại.

        * Node.previousSibling: tham chiếu đến nút anh em nằm liền kề trước với nút hiện tại.

    + Truy xuất trực tiếp: Truy xuất trực tiếp sẽ nhanh hơn, và đơn giản hơn khi bạn không cần phải biết nhiều về quan hệ và vị trí của nút. Có 3 phương thức để bạn truy xuất trực tiếp được hỗ trợ ở mọi trình duyệt:

        * document.getElementById('id_cần_tìm')
        * document.getElementsByTagName('div')
        * document.getElementsByName('tên_cần_tìm')
    

    + Các trình duyệt hiện đại sau này (Chrome) có hỗ trợ thêm các phương thức truy xuất mạnh mẽ và linh hoạt hơn nhiều, thậm chí hỗ trợ truy xuất theo vùng chọn CSS phức tạp như vùng chọn jQuery (một thư viện Javascript mạnh và đáng dùng để tối ưu hóa hiệu quả công việc cũng như tiết kiệm thời gian).

        *document.querySelector('#id p.class'): truy xuất đến vùng chọn và trả về kết quả tham chiếu đầu tiên.

        * document.querySelectorAll('#id p[class^=test]'): tương tự querySelector nhưng trả về mảng các tham chiếu.

        * document.getElementsByName('class1 class2'): tham chiếu đến tất cả các nút có thuộc tính className chứa tất cả các tên lớp cần tìm.

- Kết luận: 
    + Chung quy lại chúng ta đã cùng nhau tìm hiểu các khái niệm cơ bản về DOM và cách thao tác với nó. Đó chỉ là những kiến thức hết sức cơ bản, tuy nhiên bạn cũng có thể thấy DOM quan trọng như thế nào.