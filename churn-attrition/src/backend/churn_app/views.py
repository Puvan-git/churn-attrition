from django.shortcuts import render
from django.http import JsonResponse
from .churn_analysis import feature_importance, correlation_matrix

# This file is for defining views. Views handle the logic for what happens when a user visits 
# a particular URL in your Django app. For your churn analysis app, you’ll likely write a view that 
# calls the churn analysis logic and sends the results to the frontend.

# Create your views here.
def churn_analysis_view(request):
    feature = feature_importance() # call feature importance logic
    matrix = correlation_matrix() # call correlation matrix logic
    return JsonResponse(feature, matrix) # Return results as JSON