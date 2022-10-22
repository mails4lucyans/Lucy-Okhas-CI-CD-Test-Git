#Task 24

import abc

class Vehicle(metaclass=abc.ABCMeta):

    @abc.abstractmethod
    def drive_direction(self):
        pass


class Car(Vehicle):
    

    def drive_direction(self):
        return "Drive forward"

class plane(Vehicle):
    def drive_direction(self):
         return "Drive upward"



car1 = Car()
print(car1.drive_direction())

plane1 = plane()
print(plane1.drive_direction())