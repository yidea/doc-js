# Digital Ocean

### SSH key
https://www.digitalocean.com/community/tutorials/how-to-connect-to-your-droplet-with-ssh

### Ubuntu 14.04

#### SSH Key Setup & Github
`sudo apt-get install git`
//setup github SSH pub on droplet https://help.github.com/articles/generating-ssh-keys/

https://www.digitalocean.com/community/tutorials/how-to-connect-to-your-droplet-with-ssh
https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04

#### Nano basics
https://wiki.gentoo.org/wiki/Nano/Basics_Guide

ctrl + W // search word 
ctrl + K/U // cut/paste line
ctrl + X //exit
ctrl + O //save changes
ctrl + C //cancel

#### Ubuntu Config
https://www.digitalocean.com/community/tutorials/additional-recommended-steps-for-new-ubuntu-14-04-servers
  
```
//Task manager & Monitor 
https://www.digitalocean.com/community/tutorials/how-to-use-top-netstat-du-other-tools-to-monitor-server-resources

ps aux | grep node //check node process
htop (an advanced version of toop) / top // check CPU/Mem/Swap/Process
iptraf / nethogs //check bandwidth of process
free -m / vmstat //list memory usage detail
pydf -a //disk usage
ncdu //current folder disk usage
    
//Upstart
Init setup when server boots
https://www.digitalocean.com/community/tutorials/the-upstart-event-system-what-it-is-and-how-to-use-it
  
//PM2 - Node manager 
pm2 list
pm2 monit
pm2 logs
pm2 start/stop/restart/delete app.js
PORT=80 pm2 start app.js
  
//Firewall
sudo ufw allow ssh
sudo ufw allow 80/tcp //allow port 80 for web server
//sudo ufw allow 3000/tcp //allow port 3000 for test (optional)
sudo ufw allow 443/tcp //ssl
sudo ufw allow 25/tcp //smtp
sudo ufw show added //show port opened
sudo ufw enable

//Config timezone
sudo dpkg-reconfigure tzdata
sudo apt-get update
sudo apt-get install ntp

//take snapshot 
sudo poweroff //or poweroff from UI
```
  
### Node.js in Production 
http://handyjs.org/article/the-kick-ass-guide-to-deploying-nodejs-web-apps-in-production
  
#### Setup Ghost blog on Ubuntu 14.04
http://seanvbaker.com/a-ghost-workflow/
Ghost 0.59 only works w node 0.10.x to date, admin is at `http://YourBlogURL/ghost/`

- If you use Droplet w Ghost app pre-installed in `/var/www/ghost`, it will also setup Nginx for you in `/etc/ngix`
  https://www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-ghost-application?comment=5602
  It uses Upstart script to have Ghost start on boot at `/etc/init/ghost.conf`, you can `sudo service ghost restart`
  Edit Nginx config for Ghost(2368->80) `nano /etc/nginx/sites-available/ghost`, change `server_name` to a subdomain.
  Also need to change Ghost config.js url
  
  http://jonathonstaff.com/blog/running-ghost-in-a-subdirectory-with-a-static-nginx-site/
  https://www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-ghost-application?comment=5602
  `service ghost start/stop/restart` 

- Else create your own in subdomain/subfolder
  
  http://blog.hipzter.co.uk/2014/03/14/how-to-install-ghost-on-a-subdomain-at-digitalocean/
  https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04
  
- Enable Code highlighting w Prism & comments with Disqus 

  At 0.59, Ghost is still lacking features like comment, spell check, code highlighting. But there's some temporary working around for now.
  * Code highlighting using Prism.js http://www.incrediblemolk.com/add-code-highlighting-to-your-ghost-blog/
  * You can use Disqus as comment system by following http://christophvoigt.com/enable-comments-on-ghost-with-disqus/
    
#### Nginx

Nginx is a HTTP & Reverse Proxy Server, as well as a load balancer - Great as higher Performance and multi-purpose Frontend Server. Because ngnix uses a non-threaded, event-driven architecture, nginx is able to outperform web servers like Apache.
Nginx is good for serving lots of static files or use as load balancer accross multiple node servers. much faster than Apache at delivering static files (like JavaScript, CSS, images, PDF files, static HTML files, etc.)

https://www.linode.com/docs/uptime/loadbalancing/use-nginx-for-proxy-services-and-software-load-balancing

Nginx vs Apache
http://arstechnica.com/business/2011/11/a-faster-web-server-ripping-out-apache-for-nginx/

Edit config in `/etc/nginx/sites-available`, then `service nginx restart/start/stop`
 
```
server {  
    listen 0.0.0.0:80;
    server_name <yourdomain>;
    access_log /var/log/nginx/<yourdomain>.log;

    location / {
        proxy_pass http://127.0.0.1:<port>;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header HOST $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_redirect off;
    }
}
```

Monitor Nigix access/error
```
tail /var/log/nginx/access.log -f
tail /var/log/nginx/error.log -f
```

### Haproxy
 http://blog.carbonfive.com/2014/06/02/node-js-in-production/
 
#### NPM

```
sudo npm install pm2 -g
```
