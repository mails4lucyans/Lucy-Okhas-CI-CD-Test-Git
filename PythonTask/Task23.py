#Task 23
class User:
    __password = "Password"

    def get_password(self):
        return self.__password



class ActiveUser(User):

    def get_password(self):
        return "********"


user = User()
print(user.get_password())

activeUser = ActiveUser()
print(activeUser.get_password())