#!/bin/bash 
echo "Hello World"

if [ "$ENV" == "production"  ];
then
  echo "Switching to Firebase Production environment"
  yes | cp -rf "test/google.json" test3
  yes | cp -rf "test/apple.json" test3
else
  echo "Switching to Firebase Dev environment"
  yes | cp -rf "test/google.json" test2
  yes | cp -rf "test/apple.json" test2
fi