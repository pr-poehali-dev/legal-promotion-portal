import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Scale" size={32} className="text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">Пошлина.Онлайн</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О платформе</a>
              <a href="#advantages" className="text-gray-600 hover:text-blue-600 transition-colors">Преимущества</a>
              <a href="#statistics" className="text-gray-600 hover:text-blue-600 transition-colors">Статистика</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Тарифы</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Стать партнёром</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-scale-in">
              Увеличение целевого трафика для <br />
              <span className="text-blue-600">юридических компаний</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Размещение на портале "Пошлина.Онлайн" — это стратегическое присутствие в моменте юридического запроса. 
              Пользователь приходит оплатить пошлину и сразу видит вашу компанию.
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 transition-all hover:scale-105">
                Узнать подробнее
              </Button>
              <Button variant="outline" size="lg" className="px-8 transition-all hover:scale-105">
                Посмотреть статистику
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Icon name="Building2" size={48} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">О нас</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Сервис "Пошлина.Онлайн" активно развивается как единое информационное пространство для граждан и организаций, 
              обращающихся в судебные органы Российской Федерации.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Icon name="MapPin" size={32} className="text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Адреса судов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">График работы и контактная информация</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Icon name="CreditCard" size={32} className="text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Банковские реквизиты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Для оплаты госпошлин онлайн</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Icon name="ExternalLink" size={32} className="text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Официальные сайты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Прямые ссылки на сайты судов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Icon name="Users" size={32} className="text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Юридические услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Информация о доступных услугах</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Преимущества размещения</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <Icon name="TrendingUp" size={32} className="text-green-600 mb-2" />
                <CardTitle>Высокий трафик</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Десятки тысяч уникальных пользователей ежемесячно</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader>
                <Icon name="Target" size={32} className="text-blue-600 mb-2" />
                <CardTitle>Целевая аудитория</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Граждане и юрлица, уже находящиеся в процессе обращения в суд</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader>
                <Icon name="MapPin" size={32} className="text-purple-600 mb-2" />
                <CardTitle>Геотаргетирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Размещение рядом с нужным судом, в нужном регионе</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader>
                <Icon name="Crosshair" size={32} className="text-orange-600 mb-2" />
                <CardTitle>Точность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Блок с юр.услугами расположен непосредственно на страницах судов</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader>
                <Icon name="Link" size={32} className="text-indigo-600 mb-2" />
                <CardTitle>Интеграция с госданными</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Работаем с открытыми источниками РФ</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader>
                <Icon name="Award" size={32} className="text-red-600 mb-2" />
                <CardTitle>Эксклюзив по региону</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Только 1 компания на 1 регион / суд</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Растущий трафик и вовлечённость аудитории</h2>
            <p className="text-lg text-gray-600">Проект активно набирает обороты. По данным за последний отчётный период:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600">21,400</CardTitle>
                <CardDescription className="text-sm text-gray-600">визитов</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-green-100 text-green-800">+65.36%</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-green-600">9,242</CardTitle>
                <CardDescription className="text-sm text-gray-600">посещения</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-green-100 text-green-800">+66.22%</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-purple-600">8,078</CardTitle>
                <CardDescription className="text-sm text-gray-600">уникальных посетителей</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-green-100 text-green-800">+65.46%</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-orange-600">7,911</CardTitle>
                <CardDescription className="text-sm text-gray-600">новых пользователей</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-green-100 text-green-800">+63.52%</Badge>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 font-medium">
              Каждую неделю подключаются новые регионы и суды. <br />
              <span className="text-blue-600">Сейчас — лучшее время, чтобы занять позиции на растущем рынке.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Пакеты и стоимость размещения</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Старт</CardTitle>
                <CardDescription>Присутствие на 1–3 судах</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">120,000 ₽</span>
                  <span className="text-gray-600">/год</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm">До 3 судов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm">Городской охват</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm">Базовая поддержка</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Выбрать план</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-blue-200 border-2 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">Популярный</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <CardDescription>Присутствие на всех судах региона</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">300,000 ₽</span>
                  <span className="text-gray-600">/год</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm">До 10 судов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm">Региональный охват</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm">Приоритетная поддержка</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Выбрать план</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <CardDescription>Эксклюзив + главная страница + поддержка</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">400,000 ₽</span>
                  <span className="text-gray-600">/год</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm">10+ судов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm">Эксклюзивное размещение</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm">Размещение на главной</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm">Персональная поддержка</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Выбрать план</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">💡 Также возможны индивидуальные условия и рассрочка для долгосрочных партнёров.</p>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Icon name="Shield" size={48} className="text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Партнёрский подход</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Мы не размещаем рекламу "для всех". На нашем портале пользователи оплачивают госпошлины, 
              оставляют персональные данные, работают с судебной информацией.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Icon name="CheckCircle" size={32} className="text-green-300 mb-2" />
                <CardTitle className="text-white">Проверенные компании</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">С наличием действующей лицензии и ИНН, проверенной репутацией</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Icon name="Building" size={32} className="text-blue-300 mb-2" />
                <CardTitle className="text-white">Реальные кейсы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">С подтверждённым юридическим адресом и успешной практикой</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Icon name="Star" size={32} className="text-yellow-300 mb-2" />
                <CardTitle className="text-white">Эксклюзивная среда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">Участие в эксклюзивной юридической среде с ограниченным доступом</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Готовы обсудить размещение?</h2>
            <p className="text-lg text-gray-600">
              Забронируйте размещение в своём регионе уже сегодня. Количество партнёров ограничено.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="User" size={20} className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Менеджер по партнёрствам</p>
                    <p className="text-gray-600">Имя Фамилия</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                  <p className="text-gray-900">+7 (XXX) XXX-XX-XX</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                  <p className="text-gray-900">partner@poshlina.online</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Globe" size={20} className="text-blue-600" />
                  <p className="text-gray-900">www.poshlina.online</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Оставить заявку</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Название компании" className="w-full" />
                </div>
                <div>
                  <Input placeholder="Контактное лицо" className="w-full" />
                </div>
                <div>
                  <Input placeholder="Телефон" className="w-full" />
                </div>
                <div>
                  <Input placeholder="Email" className="w-full" />
                </div>
                <div>
                  <Textarea placeholder="Интересующий регион и дополнительная информация" className="w-full" rows={3} />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Scale" size={32} className="text-blue-400" />
              <span className="text-xl font-semibold">Пошлина.Онлайн</span>
            </div>
            <p className="text-gray-400 mb-4">
              Единое информационное пространство для граждан и организаций, обращающихся в судебные органы РФ
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Пошлина.Онлайн. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;