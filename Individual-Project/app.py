from flask import Flask, render_template, request, redirect, url_for, flash
from flask import session as login_session
import pyrebase

firebaseConfig = {
  "apiKey": "AIzaSyDkT8VhvMaO2zukblvPPxhOXlQtZTVXdIc",
  "authDomain": "try1-49d4e.firebaseapp.com",
  "projectId": "try1-49d4e",
  "storageBucket": "try1-49d4e.appspot.com",
  "messagingSenderId": "8078839590",
  "appId": "1:8078839590:web:8fbfd073a02ee940e87be7",
  "measurementId": "G-9KSDDRLC63",
  "databaseURL":"https://try1-49d4e-default-rtdb.europe-west1.firebasedatabase.app/"
}


app = Flask(__name__, template_folder='templates', static_folder='static')
app.config['SECRET_KEY'] = 'super-secret-key'

#Code goes below here

@app.route("/")
def home():
    return render_template("index.html")


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    error = ""
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        try:
            login_session['user'] =  auth.create_user_with_email_and_password(email, password)
            return redirect(url_for('home'))
        except:
           #am I supposed to call it main?
           error = "Sign up failed. Try again"
           return render_template("signup.html", error = error)
    return render_template("signup.html", error = error)





@app.route('/signout')
def signout():
    login_session['user'] = None
    auth.current_user = None
    return redirect(url_for('signin'))



@app.route("/quizzez")
def quizzez():
    return render_template("quizzez.html")


#Code goes above here

if __name__ == '__main__':
    app.run(debug=True)