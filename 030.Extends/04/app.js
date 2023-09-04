// Реализовать следующие классы Круг, Треугольник и Квадрат, которые наследуются от Figure. Каждый экземпляр 
// класса должен содержать свойства Площадь и Имя. Вывести всю информацию о фигурах в консоль. 
// Площадь должна рассчитываться по математическим формулам.Класс Figureсодержит 
// поля: pi= 3.14, r= radius, a= side, h= height, а также сеттеры для данных полей. 
// Дочерние классы содержать геттеры на получение площади

class Figure {
    pi= 3.14;
    radius;
    side;
    height;

    setRadius(radius) {
        this.radius = radius;
    }
    setSide(side) {
        this.side = side;
    }
    setHeight(height) {
        this.height = height;
    }
}

class Circle extends Figure{

}

class Triangle extends Figure{

}

class Square extends Figure{

}

const circle = new Circle();
const triangle = new Triangle();
const  square = new  Square();

