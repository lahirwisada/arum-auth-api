/**
 * ini dibuat manual (buat ApplicationContextnya sendiri, bukan dari generate),
 * dengan tujuan memudahkan akses dari luar file main.ts
 * Langkah-langkah : 
 * 1. buat file app.context.ts
 * 2. kemudian replace main.ts dengan code seperti pada file ini
 * 
 * untuk kode selengkapnya silahkan kunjungi : https://github.com/ahmadarif/medium-nest-app
 */
import { ApplicationContext } from './app.context';

async function bootstrap() {
  const app = await ApplicationContext();
  await app.listen(3000);
}

bootstrap();