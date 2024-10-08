from django.apps import AppConfig
# This file contains configuration for the app itself. 
# It defines the app's name and can be used for additional app-specific settings. 
# You rarely need to modify it unless you have specific app configurations.

class ChurnConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'churn'
