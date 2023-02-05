![logo](https://user-images.githubusercontent.com/102267210/193479015-a2804e1c-c166-46fb-a65f-4e9099454881.svg)

# Projeto AppFood

Aplicação web mobile que simula o Ifood, alimentando-se de uma API. O usuário pode se cadastrar, alterar seus dados cadastrais, fazer os pedidos, acessar o carrinho de compras, finalizar a compra e acompanhar o pedido.

### :satellite: [Link do deploy no Render](https://projeto-ifuture.surge.sh/)

## 💻 Funcionalidades

### - Fluxo de Login/Cadastro:

![login](https://user-images.githubusercontent.com/102267210/193480285-83e48e82-ea9e-4c4f-9195-a437f6e36145.PNG) ![8](https://user-images.githubusercontent.com/102267210/193480659-3a6eaed9-a44f-4e5d-83ba-0088439d6180.PNG) ![9](https://user-images.githubusercontent.com/102267210/193480700-a19ce795-46c2-42d3-9307-842cef3b36b5.PNG)

- O usuário deve ser capaz de criar uma conta, cadastrando seus dados pessoais e seu endereço.
- Caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário deve receber uma mensagem de erro clara.
- Após finalizar o cadastro, o usuário deve ser redirecionado para a tela de lista de restaurantes.

### - Busca e Seleção de Restaurantes:

![2](https://user-images.githubusercontent.com/102267210/193480360-075ca645-7435-4895-b534-431ee6c0465b.PNG) ![3](https://user-images.githubusercontent.com/102267210/193480362-c611a494-9d3b-4cf6-9f69-92b4fed74640.PNG)![4](https://user-images.githubusercontent.com/102267210/193480396-0d3f7494-eee7-4781-9c9d-cfe2f363c7fe.PNG)

- O usuário deve ser capaz de visualizar uma lista com todos os restaurantes.
- O usuário deve ser capaz de buscar um restaurante por nome.
- O usuário deve ser capaz de filtrar os restaurantes por categoria.
- O usuário deve ser capaz de clicar no card de um restaurante para visualizar a tela com seu cardápio.

### - Cardápio do Restaurante:

![5](https://user-images.githubusercontent.com/102267210/193480453-99a55cb9-8a5a-4e21-b79e-c9f9785398d3.PNG)

- O usuário deve ser capaz de visualizar as informações do restaurante (foto, nome, tipo, tempo de entrega, frete, endereço).
- O usuário deve ser capaz de visualizar os produtos do restaurante.
- O usuário deve ser capaz de visualizar as informações de cada prato (foto, nome, descrição, preço).
- O usuário deve ser capaz de adicionar pratos no carrinho e selecionar a quantidade de cada prato.
- O usuário deve ser capaz de remover itens do carrinho.
- Se já tiver algum item de outro restaurante no carrinho, aparece uma mensagem perguntando para o usuário se ele deseja limpar o carrinho.

### - Carrinho e Finalizar Compra:

![6](https://user-images.githubusercontent.com/102267210/193480540-41f5bed9-5144-496b-9a2b-6cebc272dbe2.PNG) ![9](https://user-images.githubusercontent.com/102267210/193482293-5f0f2fda-7052-4b56-a282-3f2d0beb2bd3.PNG)

- O usuário deve ser capaz de visualizar a lista de itens que adicionou ao carrinho. Caso não tenha adicionado nenhum item, deverá ver uma mensagem de "Carrinho Vazio".
- O usuário deve visualizar, no topo da tela, o endereço de entrega.
- O usuário deve visualizar o preço total da compra, que deve ser corretamente calculado de acordo com o preço e quantidade de cada item adicionado juntamente com o preço do frete.
- O usuário deve ser capaz de selecionar uma forma de pagamento dentre as opções de cartão de crédito e dinheiro.
- O usuário deve ser capaz de concluir um pedido e, ao fazê-lo, deve ver um banner de "Pedido em Andamento" com os dados do pedido (esse banner fica ativo durante o tempo de entrega do restaurante).
- Se já houver um pedido em andamento, o usuário não poderá realizar outro pedido até que a entrega seja concluída.

### - Perfil, Editar Perfil e Histórico de Pedidos:

![7](https://user-images.githubusercontent.com/102267210/193480569-2de91f2b-9d81-446a-976d-e4ccd85f2058.PNG)

- O usuário deve ser capaz de visualizar e editar seus dados pessoais e endereço.
- Ao editar as informações, caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário deve receber uma mensagem de erro clara.
- O usuário deve ser capaz de visualizar o seu histórico de pedidos concluídos.
- Caso queira, o usuário pode clicar no botaão "sair" para fazer o logout.
