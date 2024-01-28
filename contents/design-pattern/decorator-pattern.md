---
title: Decorator pattern
category: 'design pattern'
tags: [pattern]
dateCreated: 2024-01-28
dateModified:
---

Decorator pattern allows you attach new behaviors to objects by placing these objects inside special wrapper objects
that contain the behaviors. It provide a more flexible alternative to inheritance.

```java
public abstract class Beverage {

  String description = "Unknown Beverage";

  public String getDescription() {
    return description;
  }

  public abstract double cost();
}

public abstract class CondimentDecorator extends Beverage {

  public abstract String getDescription();
}

public class Milk extends CondimentDecorator {

  Beverage beverage;

  public Milk(Beverage beverage) {
    this.beverage = beverage;
  }

  public String getDescription() {
    return beverage.getDescription() + ", Milk";
  }

  public double cost() {
    return .10 + beverage.cost();
  }
}

public class Mocha extends CondimentDecorator {

  Beverage beverage;

  public Mocha(Beverage beverage) {
    this.beverage = beverage;
  }

  public String getDescription() {
    return beverage.getDescription() + ", Mocha";
  }

  public double cost() {
    return .20 + beverage.cost();
  }
}

```
