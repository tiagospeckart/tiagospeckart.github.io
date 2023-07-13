$(document).ready(function(){
    $('select[name="cbPais"]').change(function(){
        var country = $(this).val();
        if (country !== "0") {
            fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
                .then(response => response.json())
                .then(data => {
                    var countryData = data[0];
                    var output = "";
                    output += `<h1>${countryData.name.common}</h1>`;
                    output += `<p>Capital: ${countryData.capital[0]}</p>`;
                    output += `<p>Área: ${countryData.area} km²</p>`;
                    output += `<p>População: ${countryData.population}</p>`;
                    var flagUrl = `https://flagcdn.com/${countryData.cca2.toLowerCase()}.svg`;
                    output += `<img src="${flagUrl}" alt="Flag of ${countryData.name.common}"/>`;
                    $('#countryInfo').html(output);

                    var googlePhotosLink = `https://www.google.com/search?q=${country}&tbm=isch`;
                    $('#countryPhotosLink').attr('href', googlePhotosLink);
                })
                .catch(() => alert("Erro ao consultar o país."));
        }
    });
});
