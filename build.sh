rm -rf host/dist
rm -rf mfe/dist
cd host && webpack
cd ..
cd mfe && webpack