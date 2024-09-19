For "Migration admin.0001_initial is applied before its dependency core_user.0001_initial on database 'default'." error

- Comment path('admin/', admin.site.urls) in project urls.py file.
- Then in settings.py file comment django.contrib.admin in installed app.
- Do makemigrations and migrate it new table with your customize fields for user is created in table.
