class Human:
    leg_count = 4

    def get_gender(self):
        return "Unknown"



class Man(Human):

    def get_gender(self):
        return "man"


class Woman(Human):

    def get_gender(self):
        return "Woman"

    def _int_(self, Man, Woman):
        self.Man = Man
        self.Woman = Woman


human = Human()
human.get_gender()

man1 = Man()
print(man1.get_gender())



woman1 = Woman()
print(woman1.get_gender())