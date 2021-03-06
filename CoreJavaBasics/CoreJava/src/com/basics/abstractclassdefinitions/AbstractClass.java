package com.basics.abstractclassdefinitions;


/**
 * @author chouhan
 * 
 * 	Abstract Classes:
 * 		
 * 		1). A class defined as abstract cannot be instantiated. Meaning, you cannot call just/only new AbstractClass().
 * 				You need to override all the methods that are marked as abstract as well.(See AbstractMain)
 * 		2). abstract keyword is non access modifier.
 * 		3). When a method is marked as abstract, there should not be any implementation for the method.
 * 		4). Abstract methods have to be overridden in the sub classes.
 * 		5). Abstract classes NEED NOT have abstract methods. Those methods which do not have abstract defined, should be implemented. 
 * 				Meaning there should be a implementation code for this method right in this abstract class method body.
 * 		6). If there is at-least one abstract method defined in the whole class, then that class should be declared as abstract.
 * 				We have call() method as abstract, so we need to have AbstractClass defined as abstract.
 * 		7). Classes and Methods marked as private cannot be abstract
 * 		8). Classes and Methods marked as static cannot be abstract.
 * 		9). Classes and Methods marked as final cannot be abstract.
 * 		10). Abstract classes can have default and as well as overloaded constructors. When no constructor is defined - a default constructor 
 * 				will be generated by compiler.
 * 		11). Constructors of abstract classes are invoked when a subclass object is created. You can call the superclass constructor by calling super().
 * 		12). Abstract classes hides the functionality of those methods that are defined as abstract. The actual functionality of the abstract methods
 * 				are exposed by the implementation classes.
 * 		13). Abstract Method Overloading signatures are supported in abstract classes.		
 * 
 * 		
 *
 */

// private abstract class AbstractClass  -- private and abstract keywords on class definitions doesn't go together
// static abstract class AbstractClass --  static and abstract keywords on class definitions doesn't go together
// final abstract class AbstractClass -- final and abstract keywords on class definitions doesn't go together
public abstract class AbstractClass {
	
//	Which Constructor gets called by the compiler by default ?  Default empty constructor or Overloaded Constructor.
	
	// AbstractClass default Constructor
	
	public AbstractClass(){
		System.out.println("This is AbstractClass Default Constructor. If we don't create this constructor, the JVM compiler creates it for us.");
	}
	
	// AbstractClass Overloaded Constructors
	public AbstractClass(String str){
		System.out.println("This is AbstractClass Overloaded Constructor.");
	}
	
	// This is the abstract method signature.
	public abstract void call(); // The actual business functionality of this method is exposed by the SubClass which extends AbstractClass.
	
//	There should not be any Method body if the method is defined as abstract.
//	public abstract void call(){}  You cannot call like this. 
	
//	Refer to Point 5.
	public void stop(){
		System.out.println("This method stop() is not an abstract method. This method cannot be overridden. This method needs to have a body "
				+ "implemented right here. This method has the final business logic.");
	}
	
	// Abstract Method Overloading signatures are supported in abstract classes
//	public abstract boolean call(String str);
	
//	Private is limited to this class only. Meaning, the scope of a private method is only limited to this class. But actually, when a method is 
//	declared as abstract, we would want it to extend this defined abstract method to SubClasses.
	
//	private abstract void run();  Refer to Point 7
	
//	static keyword is something to do with JVM memory management stack memory. We cannot have methods to be in stack memory, as we need the 
//	abstract methods to be compiled at run time, and can be used by the SubClasses.
	
//	public static abstract void sleep(); Refer to Point 8
	
	
//	Final keyword is immutable, meaning the method itself cannot be modified. What we eventually need when we declare a method as abstract is,
//	we need the SubClasses to implement the actual business logic. If Final is used, then the literal meaning of final is that this method has
//	the best code ever, which shouldn't be Implemented in the SubClasses. So final and abstract keywords does go together.

//	public final abstract void jump(); Refer to Point 9.


}


