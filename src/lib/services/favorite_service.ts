
export function fetchFavorites(): Promise<Response> {

    return fetch('https://tstapi.ffcloud.com.br/favorites', {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        body: JSON.stringify({
        })
    });

}