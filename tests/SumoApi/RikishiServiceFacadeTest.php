<?php

declare(strict_types=1);

namespace App\Tests\SumoApi;

use App\SumoApi\RikishiServiceFacade;
use Mockery;
use Mockery\Adapter\Phpunit\MockeryPHPUnitIntegration;
use PHPUnit\Framework\TestCase;
use StuartMcGill\SumoApiPhp\Model\Rikishi;
use StuartMcGill\SumoApiPhp\Service\RikishiService;

class RikishiServiceFacadeTest extends TestCase
{
    use MockeryPHPUnitIntegration;

    /** @test */
    public function getMakuuchiWrestlers(): void
    {
        $service = Mockery::mock(RikishiService::class);
        $service
            ->expects('fetchDivision')
            ->with('Makuuchi')
            ->andReturn([
                $this->generateRikishi('Hakuho'),
                $this->generateRikishi('Kakuryu'),
            ]);

        $facade = new RikishiServiceFacade($service);
        $wrestlers = $facade->getMakuuchiWrestlers();

        $this->assertCount(2, $wrestlers);
    }

    private function generateRikishi(string $shikonaEn): Rikishi
    {
        return new Rikishi(
          id: 1,
          sumoDbId: null,
          nskId: null,
          shikonaEn: $shikonaEn,
          shikonaJp: null,
          currentRank: null,
          heya: null,
          birthDate: null,
          shusshin: null,
          height: null,
          weight: null,
          debut: '2023-01',
        );
    }
}
