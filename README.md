# Portlet Component

Componente responsável pelo encapsulamento e gestão de portlets

## Forma de Utilização

```js
    Y.use('ent-portlet', function (Y) {
        const _portlet = new Y.Portlet('.portlet-wrappet-class')
    })
```

## Métodos

### getFieldId(id)

Retorna o identificador de um determinado elemento baseado no contexto atual do portlet.
Padrão de retorno: #_portletId_elementId.

Exemplo:

```js
  const _portlet = new Y.Portlet('.search-benefits-portlet')
  
  $(_portlet.getFieldId('productCode')).val()
```

### getFieldName(name)

Retorna o name de um determinado elemento baseado no contexto atual do portlet.
Padrão de retorno: _portletId_elementName. Normalmente utilizado em conjunto do FormValidator.

Exemplo:

```js
    const _portlet = new Y.Portlet('.search-benefits-portlet')
    
    const _config = new Y.ValidatorBuilder(_portlet.getFieldId('formSearchBenefit'))
                         .append(new Y.Validation(_portlet.getFieldId('productCode')).required())
                         .build()

    const validator = new Y.FormValidator(_config)
    validator.validate()
```

### refresh(data)

Solicita a atualização do portlet com base no data enviado.

Exemplo:

```js
    const _portlet = new Y.Portlet('.search-benefits-portlet')
    
    const data = {
        portletAjaxable: true,
        productCode: 10,
        countryCode: 20
    }
    
    _portlet.refresh(data)
```

### onRefreshed(callback)


Adiciona um callback que será invocado após a atualização do portlet.

Exemplo:

```js
    const _portlet = new Y.Portlet('.search-benefits-portlet')
    
    _portlet.onRefreshed(() => {
        initElementsBind();        
    })
```

### createResourceUrl(resourceId)

Cria a url para execução de requisições a um determinado recurso do portlet.

Exemplo:

```js
    const _portlet = new Y.Portlet('.search-benefits-portlet')
    
    const requestSettings = {
        url: _portlet.createResourceUrl('enter'),
        data: $(_query.form.id).serialize(),
        method: 'POST',
        dataType: 'json',
        ignoreAuth: true,
        showMessage: false,
        cache: false
    }
    
    $.ajax(requestSettings)
```