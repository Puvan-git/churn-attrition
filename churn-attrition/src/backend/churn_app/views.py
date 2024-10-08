from django.shortcuts import render
from django.http import JsonResponse
from .churn_analysis import churn_analysis

# This file is for defining views. Views handle the logic for what happens when a user visits 
# a particular URL in your Django app. For your churn analysis app, you’ll likely write a view that 
# calls the churn analysis logic and sends the results to the frontend.

# Create your views here.
def churn_analysis_view(request):
    result = churn_analysis() # call churn logic
    return JsonResponse(result) # Return results as JSON