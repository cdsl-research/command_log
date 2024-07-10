#!/bin/bash
#このファイルを.bash_profileに追加

curl https://raw.githubusercontent.com/rcaloras/bash-preexec/master/bash-preexec.sh -o ~/.bash-preexec.sh
source ~/.bash-preexec.sh

preexec() {
        data='{"user":"'$(whoami)'", "address":"'$(hostname -I)'","command":"'$1'"}';
        #echo $data;
        curl -s -L -H "Content-Type: application/json" -d "${data}" <ここにGASのリンク> > /dev/null &
}
