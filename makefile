all:
	git pull && git add . && git commit -m "29 August" && git push origin master 
	
#	git add . && git commit -m "23 August" && git push heroku master && heroku open && heroku repo:purge_cache 
