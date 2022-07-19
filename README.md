# IWASTECH-CASE-STUDY
FULL STACK DEVELOPER – CASE STUDY

Built using NodeJS/ReactJS 


https://iwastechcasestudy.herokuapp.com/

##########################################################################################

Senaryo:
Nodejs ve postgresql kullanarak kütüphanede kullanmak üzere kitapların kaydını oluşturmak ve
listelemek için basit bir api yazılacaktır. Frontend kısmında react kullanılarak bir search portal oluşturulacak,
arama ve sıralama yapılacaktır. Ayrıca Frontend bölümünde yeni bir veri oluşturmak maksadıyla bir form sayfası
oluşturulacaktır.

(NODEJS)
Teknik Detaylar, Zorunluluklar:
- Express.js kullanılmalıdır.
- ORM için sequelize kullanılmalıdır.
- Dosya yapısı aşağıda paylaşılan ekran görüntüsü şeklinde olmalıdır.
- Category, Author, Publisher ve Book modelleri oluşturulmalıdır ve modellere ait datatype’ları tanımlanmalıdır.
- Modeller arasında ilişkiler kurulmalıdır.
- Database bağlantısı yapılmalı ve PGadmin veya DBeaver üzerinden tablolar görüntülenebilir olmalıdır.
- Her bir modele ait POST ve GET işlemleri yapılabilmelidir.
- Her bir model tek bir endpoint üzerinden POST ve GET işlemi yapılabilmelidir. Örneğin; GET/POST ………/api/book
- Yapılacak istekler POSTMAN üzerinden yapılabilmelidir.

(REACT)
Teknik Detaylar, Zorunluluklar:
- Aşağıda ekran görüntüsü paylaşılmış olan ekranların çalışır halde görüntülenmesi.
- React kullanılarak functional kodlancaktır.
- Component yapısı Atomic, Molecules, Organisma şeklinde kullanılacaktır.
- Style konusunda herhangi bir kısıtlama yoktur. Herhangi bir kütüphane kullanılabilir.
- Navigation işlemi yapılacaktır.
- State ler global olarak redux yapısında tutulmalıdır. (Nice to have)

NOTE: Input içerisine herhangi bir value yazılmadığı sürece sayfa bu şekilde görünecektir. Add New Record butonuna tıklandığında form sayfasına yönlendirilecektir.

NOTE: Input içerisine yazılan value, keyword olarak backende istek atılacak ve book name içerisinde keyword geçen datalar liste halinde gelecektir. Pagination kullanılarak sadece 5 adet veri listelenecektir. Diğer sayfalara tıklandığında backende current page gönderilecek ve current page e ait veriler gelecektir. Aynı şekilde book name üzerinden asc ve desc olarak veriler sıralanabilecektir. Sıralama işlemi de backend üzerinden yapılacaktır.

NOTE: Veri sayısı 5 ten az ise pagination görünmeyecektir.

NOTE: Category, Author ve Publisher selectable olmalıdır. Ve yanlarındaki üç nokta olan butona tıklandığında yeni veri
girişi sağlanabilmelidir. Yeni veri girişi için modal kullanılabilir. Book name ile birlikte tüm veriler girildiğinde add
butonuna basıldığında POST işlemi ile database e yeni veri eklenebilmelidir. Left arrow iconuna tıklandığında
search-result sayfasına navigate olmalıdır.
