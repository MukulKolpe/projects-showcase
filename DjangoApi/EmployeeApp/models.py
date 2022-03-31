from django.db import models

# Create your models here.


class Departments(models.Model):
  DepartmentId = models.AutoField(primary_key=True)
  DepartmentName = models.CharField(max_length=500)

class Employees(models.Model):
  EmployeeId = models.AutoField(primary_key=True)
  EmployeeName = models.CharField(max_length=500)
  Department = models.CharField(max_length=500)
  DateOfJoining = models.DateTimeField()
  PhotoFileName = models.CharField(max_length=500)

class Users(models.Model):
  UserId = models.AutoField(primary_key=True)
  UserName = models.CharField(max_length=500)
  UserDepartment = models.CharField(max_length=500)
  UserDivision = models.CharField(max_length=500)
  UserEmail = models.CharField(max_length=500)
  UserRole = models.CharField(max_length=500)

class Projects(models.Model):
  ProjectId = models.AutoField(primary_key=True)
  ProjectName = models.CharField(max_length=500)
  ProjectDepartment = models.CharField(max_length=500)
  ProjectDivision = models.CharField(max_length=500)
  ProjectDomain = models.CharField(max_length=500)
  ProjectDescription = models.CharField(max_length=500)
  ProjecTechStacks = models.CharField(max_length=500)
  ProjectDuration = models.CharField(max_length=500)
  ProjectMentor = models.CharField(max_length=500)
  ProjectCode = models.CharField(max_length=500)
  ProjectTeam = models.CharField(max_length=500)

