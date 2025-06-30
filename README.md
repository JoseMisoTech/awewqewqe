# Site Profissional para Restaurantes

Este é um site profissional desenvolvido especificamente para restaurantes, otimizado para aprovação no Facebook Business Management.

## 🍽️ Características Principais

- **Design Gastronômico**: Layout moderno e elegante adequado para restaurantes
- **Configuração Fácil**: Altere todas as informações do restaurante através do arquivo `src/data/companyConfig.json`
- **Compliance Facebook**: Otimizado para passar na verificação do Facebook Business Management
- **Responsivo**: Funciona perfeitamente em todos os dispositivos
- **SEO Otimizado**: Meta tags e estrutura otimizada para motores de busca

## 📋 Seções Incluídas

1. **Header/Hero**: Apresentação principal com imagem gastronômica de fundo
2. **Serviços**: Seção destacando os principais serviços do restaurante
3. **Sobre o Restaurante**: Missão e visão do estabelecimento
4. **Depoimentos**: Feedback de clientes satisfeitos
5. **Contato**: Formulário de contato e informações do restaurante
6. **Footer**: Informações completas do restaurante (CNPJ, endereço, contato)
7. **Política de Privacidade**: Página dedicada para compliance

## 🔧 Como Personalizar

### 1. Informações do Restaurante
Edite o arquivo `src/data/companyConfig.json` com as informações do seu restaurante:

```json
{
  "company": {
    "shortName": "NOME CURTO DO RESTAURANTE",
    "fullName": "NOME COMPLETO DO RESTAURANTE LTDA",
    "address": "ENDEREÇO COMPLETO",
    "cnpj": "XX.XXX.XXX/XXXX-XX",
    "phone": "(XX) XXXXX-XXXX",
    "email": "contato@restaurante.com.br",
    "website": "restaurante.com.br"
  }
}
```

### 2. Serviços
Modifique a seção `services` no arquivo de configuração para refletir os serviços específicos do seu restaurante.

### 3. Depoimentos
Atualize a seção `testimonials` com depoimentos reais de seus clientes.

### 4. Imagens
As imagens são carregadas do Pexels. Você pode alterar as URLs no arquivo de configuração para usar suas próprias imagens.

## 🚀 Como Executar

1. Clone o projeto
2. Instale as dependências: `npm install`
3. Execute em modo desenvolvimento: `npm run dev`
4. Para produção: `npm run build`

## ✅ Checklist para Facebook Business Management

- [x] Informações claras do restaurante (nome, CNPJ, endereço)
- [x] Página de política de privacidade
- [x] Informações de contato funcionais
- [x] Design profissional e confiável
- [x] Conteúdo relevante e consistente
- [x] Meta tags otimizadas
- [x] Estrutura HTML semântica

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- Dispositivos móveis (< 768px)
- Tablets (768px - 1024px)
- Desktops (> 1024px)

## 🎨 Tecnologias Utilizadas

- **React 18** com TypeScript
- **Tailwind CSS** para estilização
- **Lucide React** para ícones
- **React Router** para navegação
- **Vite** como bundler

Este template pode ser facilmente adaptado para diferentes restaurantes, bastando alterar o arquivo de configuração JSON.