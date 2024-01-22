---
title: Strategy pattern
category: design_pattern
tags: [pattern]
dateCreated: 2024-01-22
dateModified:
---

Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class,
and make their objects interchangeable. This pattern allows algorithm changes to be independent of the customers
who use the algorithms.

```java
public abstract class Duck {

  FlyBehavior flyBehavior;

  public Duck() {}

  public void setFlyBehavior(FlyBehavior flyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  public void performFly() {
    flyBehavior.fly();
  }

  public abstract void display();
}

public interface FlyBehavior {
  public void fly();
}

public class FlyNoWay implements FlyBehavior {

  public void fly() {
    System.out.println("I can't fly!");
  }
}

public class FlyWithWings implements FlyBehavior {

  public void fly() {
    System.out.println("I'm flying!");
  }
}

public class MallardDuck extends Duck {

  public MallardDuck() {
    flyBehavior = new FlyWithWings();
  }

  public void display() {
    System.out.println("I'm a real mallard duck!");
  }
}

public class ModelDuck extends Duck {

  public ModelDuck() {
    flyBehavior = new FlyNoWay();
  }

  public void display() {
    System.out.println("I'm a model duck.");
  }
}

```
