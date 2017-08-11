Aprendendo HTML5
===================
----------
SERVICE WORKERS
-------------
ServiceWorker permite que você intercepte (e faça hijack) em requisições do seu site antes das mesmas serem finalizadas. Quando um ServiceWorker
estiver instalado, você será capaz de entregar respostas às requisições através do ServiceWorker(no lado do cliente), sem necessariamente tocar
na rede.
ServiceWorker é a evolução do AppCache manifest. O AppCache foi esmagado por anos devido aos seus diversos problemas que foram extensivamente documentados.
Por outro lado o ServiceWorker oferece um API programática que permite que você alcance muito mais do que o appCache. O ServerWorker é basico em puro JavaScript.

ALGUMAS COISAS QUE DEVEMOS SABER SOBRE SERVICEWORKER:

1) O ServiceWorker não tem acesso ao DOM ele é um worker que roda fora do escopo da página.
2) O ServiceWorker se baseia fortemente em Promises.
3) HTTPS é obrigatório para sites em produção que pretendem usar ServiceWorker, mas para testes locais é possível usar http://localhost tranquilamente.


