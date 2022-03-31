from rest_framework import serializers
from ProjectApp.models import Departments ,Employees,Users,Projects

class DeparmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = ('DepartmentId','DepartmentName')

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('EmployeeId','EmployeeName','Department','DateOfJoining','PhotoFileName')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('UserId','UserName','UserDepartment','UserDivision','UserEmail','UserRole')

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ('ProjectId','ProjectName','ProjectDepartment','ProjectDivision','ProjectDomain','ProjectDescription','ProjecTechStacks','ProjectDuration','ProjectMentor','ProjectCode','ProjectTeam')