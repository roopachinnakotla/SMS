# djano-react
python3 -m venv env
source env/bin/active

pip install django
pip install djangorestframework
pip install django-cors-headers
pip install djangorestframework-simplejwt
pip install django

#Create backend project
python -m django startproject [Appname]

#create base folder 
python manage.py starapp base

python ./manage.py makemigration
python ./manage.py migrate

#create superuser
python manage.py createsuperuser



#frontend

npx create-react-app frontend
npm install

#Run the app
npm start

#Note
Need Seprate Terminal in Vscode for Backend and Frontend to run locally 
