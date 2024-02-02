# Simple Login Server

This is a simple server which handles the api requests for a hypothetical login page. The server has the following capabilities:

1. Login to their account - Accept a POST request with valid login information, and return the encrypted token, else let the user know that the login info is incorrect

2. Signup for the service in case they don't have an account - Accept a POST request with sensitive user information and store it in the DB for later use

3. After Login they can view and modify their user information. - Accept a GET request to display user information and allow users to Modify their information


