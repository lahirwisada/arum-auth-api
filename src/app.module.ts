import { Module } from '@nestjs/common';
import { AppController } from './infrastructure/controllers/app.controller';
import { AppService } from './infrastructure/services/app.service';
// import { AcaktextModule } from './lib/acak-text/src';
import { AcaktextModule } from '@lahirwisada/acak-text';

@Module({
  imports: [AcaktextModule.forRoot({
    secretKey: 'GOo7cVgnCBnR8TvXIgvamXNb85cPVtJi',
    algorithm: 'AES-256-CBC',
    sha: 'sha256',
    enabled: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
