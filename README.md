##How to run
### Using Docker
1. docker build -t reservasifrontendadmin . (if docker images belum ada di server, kalo ada skip)
2. docker run -p 3000:3000 reservasifrontendadmin

### Using daemon
1. nohup ./cron.sh & </dev/null
* If u want to see log, use: tail -f nohup.out
