all:
	git pull && git add . && git commit -m "23 August" && git push origin master && heroku repo:purge_cache

#	git add . && git commit -m "23 August" && git push heroku master && heroku open && heroku repo:purge_cache 
