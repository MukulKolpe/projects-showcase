from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.db.models import OuterRef
from django.db.models.functions import JSONObject
from django.contrib.postgres.expressions import ArraySubquery


from ProjectApp.models import Departments, Employees,Users,Projects
from ProjectApp.serializers import DeparmentSerializer, EmployeeSerializer,ProjectSerializer,UserSerializer
# Create your views here.

@csrf_exempt
def departmentApi(request,id=0):
  if request.method == 'GET':
    departments = Departments.objects.all()
    departments_serializer = DeparmentSerializer(departments,many=True)
    return JsonResponse(departments_serializer.data,safe=False)
  elif request.method == 'POST':
    department_data = JSONParser().parse(request)
    departments_serializer = DeparmentSerializer(data=department_data)
    if departments_serializer.is_valid():
      departments_serializer.save()
      return JsonResponse("Added Successfully",safe=False)
    return JsonResponse("Failed to Add",safe=False)
  elif request.method == 'PUT':
    department_data = JSONParser().parse(request)
    department = Departments.objects.get(DepartmentId=department_data['DepartmentId'])
    departments_serializer = DeparmentSerializer(department,data=department_data)
    if departments_serializer.is_valid():
      departments_serializer.save()
      return JsonResponse("Updated Successfully",safe=False)
    return JsonResponse("Failed to Update",safe=False)
  elif request.method == 'DELETE':
    department = Departments.objects.get(DepartmentId=id)
    department.delete()
    return JsonResponse("Deleted Successfully",safe=False)  

@csrf_exempt
def UserApi(request,id=0):
  if request.method == 'GET':
    users = Users.objects.all()
    serializer = UserSerializer(users,many=True)
    return JsonResponse(serializer.data,safe=False)
  elif request.method == 'POST':
    user_data = JSONParser().parse(request)
    users_serializer = UserSerializer(data=user_data)
    if users_serializer.is_valid():
      users_serializer.save()
      return JsonResponse("Added Successfully",safe=False)
    return JsonResponse("Failed to Add",safe=False)
  elif request.method == 'PUT':
    user_data = JSONParser().parse(request)
    user = Users.objects.get(UserId=user_data['UserId'])
    users_serializer = UserSerializer(user,data=user_data)
    if users_serializer.is_valid():
      users_serializer.save()
      return JsonResponse("Updated Successfully",safe=False)
    return JsonResponse("Failed to Update",safe=False)
  elif request.method == 'DELETE':
    user = Users.objects.get(UserId=id)
    user.delete()
    return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def ProjectApi(request,id=0):
  if request.method == 'GET':
    projects = Projects.objects.all()
    projects_serializer = ProjectSerializer(projects,many=True)
    return JsonResponse(projects_serializer.data,safe=False)
  elif request.method == 'POST':
    project_data = JSONParser().parse(request)
    projects_serializer = ProjectSerializer(data=project_data)
    if projects_serializer.is_valid():
      projects_serializer.save()
      return JsonResponse("Added Successfully",safe=False)
    return JsonResponse("Failed to Add",safe=False)
  elif request.method == 'PUT':
    project_data = JSONParser().parse(request)
    project = Projects.objects.get(ProjectId=project_data['ProjectId'])
    projects_serializer = ProjectSerializer(project,data=project_data)
    if projects_serializer.is_valid():
      projects_serializer.save()
      return JsonResponse("Updated Successfully",safe=False)
    return JsonResponse("Failed to Update",safe=False)
  elif request.method == 'DELETE':
    project = Projects.objects.get(ProjectId=id)
    project.delete()
    return JsonResponse("Deleted Successfully",safe=False)


#getting project by Project Id
@csrf_exempt
def ProjectById(request,id=0):
  if request.method == 'GET':
    projects = Projects.objects.filter(ProjectId=id)
    projects_serializer = ProjectSerializer(projects,many=True)
    return JsonResponse(projects_serializer.data,safe=False)
  return JsonResponse("No Projects Found",safe=False)


#getting project by Project Department
@csrf_exempt
def ProjectDept(request,department=''):
  if request.method == 'GET':
    projects = Projects.objects.filter(ProjectDepartment=department)
    projects_serializer = ProjectSerializer(projects,many=True)
    return JsonResponse(projects_serializer.data,safe=False)
  return JsonResponse("No Projects Found",safe=False)


#getting project by Project Domain
@csrf_exempt
def ProjectDomain(request,domain=''):
  if request.method == 'GET':
    projects = Projects.objects.filter(ProjectDomain=domain)
    projects_serializer = ProjectSerializer(projects,many=True)
    return JsonResponse(projects_serializer.data,safe=False)
  return JsonResponse("No Projects Found",safe=False)


#getting project by Project Mentor
@csrf_exempt
def ProjectMentor(request,mentor=''):
  if request.method == 'GET':
    projects = Projects.objects.filter(ProjectMentor=mentor)
    projects_serializer = ProjectSerializer(projects,many=True)
    return JsonResponse(projects_serializer.data,safe=False)
  return JsonResponse("No Projects Found",safe=False)

#getting project by Project TechStack
@csrf_exempt
def ProjectTechStack(request,techstack=''):
  if request.method == 'GET':
    projects = Projects.objects.filter(ProjecTechStacks=techstack)
    projects_serializer = ProjectSerializer(projects,many=True)
    return JsonResponse(projects_serializer.data,safe=False)
  return JsonResponse("No Projects Found",safe=False)




