from django.conf.urls import re_path
from django.contrib import admin

from EmployeeApp import views

urlpatterns = [
    re_path(r'^department$', views.departmentApi),
    re_path(r'^department/([0-9]+)$', views.departmentApi),
    re_path(r'^user$', views.UserApi),
    re_path(r'^user/([0-9]+)$', views.UserApi),
    re_path(r'^project$', views.ProjectApi),
    re_path(r'^project/([0-9]+)$', views.ProjectApi),
    re_path(r'^project/(?P<domain>[\w\-]+)$', views.ProjectApi),
]