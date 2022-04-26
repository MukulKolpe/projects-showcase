from django.urls import re_path as url
from django.contrib import admin

from ProjectApp import views

urlpatterns = [
    url(r'^department$', views.departmentApi),
    url(r'^department/([0-9]+)$', views.ProjectById),
    url(r'^user$', views.UserApi),
    url(r'^user/([0-9]+)$', views.UserApi),


    url(r'^project/all$', views.ProjectApi),
    url(r'^project/add$', views.ProjectApi),
    url(r'^project/update/([0-9]+)$', views.ProjectApi),
    url(r'^project/delete/([0-9]+)$', views.ProjectApi),
    url(r'^project/id/([0-9]+)$', views.ProjectById),
    url(r'^project/domain/(?P<domain>[\w\-]+)$', views.ProjectDomain),
    url(r'^project/dept/(?P<department>[\w\-]+)$', views.ProjectDept),
    url(r'^project/mentor/(?P<mentor>[\w\-]+)$',views.ProjectMentor),
    url(r'^project/techstack/(?P<techstack>[\w\-]+)$', views.ProjectTechStack),

]