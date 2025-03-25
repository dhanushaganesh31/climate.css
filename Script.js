
#include <stdio.h>

// Function to print a message
void printMessage() {
    printf("Hello, World!\n");
}

// Function to add two numbers
int addNumbers(int num1, int num2) {
    return num1 + num2;
}

// Function to greet a person
void greetPerson(char* name) {
    printf("Hello, %s!\n", name);
}

int main() {
    // Call the printMessage function
    printMessage();

    // Call the addNumbers function
    int result = addNumbers(5, 7);
    printf("The result is: %d\n", result);

    // Call the greetPerson function
    greetPerson("John");

    return 0;
}
