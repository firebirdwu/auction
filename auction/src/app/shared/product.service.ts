import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    private products:Product[] = [
    new Product(1, "第一个商品", 1.99, 2.5, "这是第一个商品", ["电子产品", "硬件产品"] ),
    new Product(2, "第二个商品", 10.28, 3, "这是第二个商品", ["图书"]),
    new Product(3, "第三个商品", 17.26, 5, "这是第三个商品", ["电子产品","硬件产品"]),
    new Product(4 ,"第四个商品" , 15.63, 1, "这是第四个商品", ["图书"]),
    new Product(5, "第五个商品", 12.52, 3.5, "这是第五个商品", ["婴儿产品"]),
    new Product(6, "第六个商品", 5.23, 4, "这是第六个商品", ["电子产品","硬件产品"])
  ];

  private comments:Comment[] = [
    new Comment(1, 1, "2017-02-02 00:00:00", "张三", 3, "东西还不错"),
    new Comment(2, 1, "2017-02-05 20:00:00", "李四", 1, "好东西，还可以。。。"),
    new Comment(3, 1, "2017-02-03 21:00:00", "王五", 2, "这个东西很好用。"),
    new Comment(4, 2, "2017-03-20 20:30:00", "赵六", 3, "这东西很nice"),
    new Comment(5, 3, "2017-02-21 22:45:03", "刘七", 4, "不错,下次再来。。。")
  ]
  constructor() { }
    getProducts():Product[]{
      return this.products;
    }

    getProduct(id:number):Product{
        return this.products.find((product)=>product.id == id);
    }

    getCommentsForProductId(id:number):Comment[] {
      return this.comments.filter((comment:Comment) => comment.productId == id);
    }
}

export class Product{
  constructor(
    public  id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array< string>)
  {
  }
}

export class Comment{

  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content: string)
  {
  }
}
