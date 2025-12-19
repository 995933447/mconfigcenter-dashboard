pb2TSApi ./proto/$1.proto \
  -i ../easymicro/proto \
  -i ../mgorm/proto \
  -f ./frontend/src/rpc \
  --protoOptionTagHttpMethod '(httpext.http_rule).method' \
  --protoOptionTagHttpPath '(httpext.http_rule).path' \