all:
	git pull && git add . && git commit -m "24 September" && git push origin master 
	
#	git add . && git commit -m "23 August" && git push heroku master && heroku open && heroku repo:purge_cache 
