import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AmeriabankService } from './ameriabank.service';

@ApiTags('Ameriabank')
@Controller('ameriabank')
export class AmeriabankController {
  constructor(private ameriabankService: AmeriabankService) {}

  @Get('get-ameriabank-data')
  async getDataAmeriabank(@Res() res: Response, @Req() req: any) {
    try {
      const data = await this.ameriabankService.getDataViaPuppeteerAmeriabank(
        req.literal,
      );
      return res.status(HttpStatus.OK).json(data);
    } catch (error) {
      throw error;
    }
  }

  @Get('hello-world')
  async getHelloWorld() {
    try {
      return this.ameriabankService.getDataViaPuppeteerAmeriabankTest(1);
    } catch (error) {
      throw error;
    }
  }
}
