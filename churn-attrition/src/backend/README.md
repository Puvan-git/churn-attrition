# Backend Setup Guide

This guide will help you set up the backend for the Churn Attrition Dashboard project.

## Prerequisites

- **Python 3.x** installed on your machine. You can check if Python is installed by running:
```python --version```

### Explanation of the Steps:
- **Step 1: Cloning the Repository**: This is the first step to get the project files on the user’s local machine.
```git clone <repository-url>```

- **Step 2: Navigate to the `backend` Folder**: This ensures that all backend-related commands are run inside the correct directory.
```cd path-to-repository/src/backend```
- **Step 3: Creating the Virtual Environment**: This sets up a new, isolated environment to install project-specific dependencies.
Linux: ```python3 -m venv venv``` or Windows: ```python -m venv venv```

- **Step 4: Activating the Virtual Environment**: The user activates the virtual environment to install libraries and run Python commands specific to the project.
Linux: ```source venv/bin/activate``` or Windows: ```venv/Scripts/activate```

- **Step 5: Installing Dependencies**: All necessary libraries for the backend are installed using `requirements.txt`.
```pip install -r requirements.txt```

- **Step 6: Running Migrations**: Ensures that the Django database schema is set up properly.
```python manage.py migrate```

- **Step 7: Starting the Django Server**: Runs the backend locally for development purposes.
```python manage.py runserver```

- **Step 8: Deactivating the Environment**: Once finished, the virtual environment can be deactivated.
```deactivate```

### Summary:
This README format should be clear and provide all necessary steps for replicating your Django backend setup. It covers how to install the virtual environment, activate it, install dependencies, and run the server.
